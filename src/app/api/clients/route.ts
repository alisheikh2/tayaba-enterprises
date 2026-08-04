import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { isAuthenticatedRequest } from '@/lib/auth';
import { connectToDatabase } from '@/lib/mongodb';
import Client from '@/models/Client';

const dataFilePath = path.join(process.cwd(), 'src/data/clientsData.json');

function getClientsFromFile() {
  try {
    if (!fs.existsSync(dataFilePath)) {
      return [];
    }
    const content = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error('Error reading clients file:', error);
    return [];
  }
}

function saveClientsToFile(clients: any[]) {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(clients, null, 2), 'utf8');
  } catch (error) {
    console.error('Error saving clients file:', error);
  }
}

export async function GET() {
  try {
    const db = await connectToDatabase();
    if (db) {
      let clients = await Client.find().sort({ displayOrder: 1 }).lean();

      // Auto-seed if database is empty
      if (clients.length === 0) {
        const fileClients = getClientsFromFile();
        if (fileClients.length > 0) {
          const docsToInsert = fileClients.map((c: any, index: number) => ({
            name: c.name,
            logo: c.logo,
            category: c.category || 'Corporate Client',
            displayOrder: c.displayOrder || index + 1,
          }));
          await Client.insertMany(docsToInsert);
          clients = await Client.find().sort({ displayOrder: 1 }).lean();
        }
      }

      const formatted = clients.map((c: any) => ({
        id: c._id.toString(),
        name: c.name,
        logo: c.logo,
        category: c.category,
        displayOrder: c.displayOrder,
      }));

      return NextResponse.json(formatted);
    }
  } catch (dbErr) {
    console.warn('[api/clients] MongoDB read failed, falling back to local file:', dbErr);
  }

  // Fallback to local JSON file
  const fileClients = getClientsFromFile();
  fileClients.sort((a: any, b: any) => (a.displayOrder || 0) - (b.displayOrder || 0));
  return NextResponse.json(fileClients);
}

export async function POST(request: Request) {
  if (!isAuthenticatedRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized. Please log in to the admin panel.' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const name = body.name || 'New Client';
    const logo = body.logo || '/images/clients/siemens.png';
    const category = body.category || 'Corporate Client';
    const displayOrder = body.displayOrder ? Number(body.displayOrder) : 1;

    try {
      const db = await connectToDatabase();
      if (db) {
        const created = await Client.create({
          name,
          logo,
          category,
          displayOrder,
        });

        return NextResponse.json(
          {
            success: true,
            client: {
              id: created._id.toString(),
              name: created.name,
              logo: created.logo,
              category: created.category,
              displayOrder: created.displayOrder,
            },
          },
          { status: 201 }
        );
      }
    } catch (dbErr) {
      console.warn('[api/clients] MongoDB insert failed, falling back to local file:', dbErr);
    }

    // Fallback to file storage
    const clients = getClientsFromFile();
    const newClient = {
      id: 'client-' + Date.now(),
      name,
      logo,
      category,
      displayOrder,
    };
    clients.push(newClient);
    saveClientsToFile(clients);

    return NextResponse.json({ success: true, client: newClient }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add client' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  if (!isAuthenticatedRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized. Please log in to the admin panel.' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, name, logo, category, displayOrder } = body;

    if (!id) {
      return NextResponse.json({ error: 'Client ID required' }, { status: 400 });
    }

    try {
      const db = await connectToDatabase();
      if (db) {
        const updateData: any = {};
        if (name !== undefined) updateData.name = name;
        if (logo !== undefined) updateData.logo = logo;
        if (category !== undefined) updateData.category = category;
        if (displayOrder !== undefined) updateData.displayOrder = Number(displayOrder);

        const updated = await Client.findByIdAndUpdate(id, updateData, { new: true });
        if (updated) {
          return NextResponse.json({ success: true });
        }
      }
    } catch (dbErr) {
      console.warn('[api/clients] MongoDB update failed, falling back to local file:', dbErr);
    }

    // Fallback to file storage
    let clients = getClientsFromFile();
    clients = clients.map((c: any) => {
      if (c.id === id) {
        return {
          ...c,
          name: name ?? c.name,
          logo: logo ?? c.logo,
          category: category ?? c.category,
          displayOrder: displayOrder ? Number(displayOrder) : c.displayOrder,
        };
      }
      return c;
    });

    saveClientsToFile(clients);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update client' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  if (!isAuthenticatedRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized. Please log in to the admin panel.' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Client ID required' }, { status: 400 });
    }

    try {
      const db = await connectToDatabase();
      if (db) {
        await Client.findByIdAndDelete(id);
        return NextResponse.json({ success: true });
      }
    } catch (dbErr) {
      console.warn('[api/clients] MongoDB delete failed, falling back to local file:', dbErr);
    }

    // Fallback to file storage
    let clients = getClientsFromFile();
    clients = clients.filter((c: any) => c.id !== id);

    saveClientsToFile(clients);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete client' }, { status: 500 });
  }
}
