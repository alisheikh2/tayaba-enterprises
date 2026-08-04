import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'src/data/clientsData.json');

function getClientsData() {
  try {
    if (!fs.existsSync(dataFilePath)) {
      return [];
    }
    const content = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error('Error reading clients data:', error);
    return [];
  }
}

function saveClientsData(clients: any[]) {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(clients, null, 2), 'utf8');
  } catch (error) {
    console.error('Error saving clients data:', error);
  }
}

export async function GET() {
  const clients = getClientsData();
  // Sort by displayOrder
  clients.sort((a: any, b: any) => (a.displayOrder || 0) - (b.displayOrder || 0));
  return NextResponse.json(clients);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const clients = getClientsData();
    
    const newClient = {
      id: 'client-' + Date.now(),
      name: body.name || 'New Client',
      logo: body.logo || '/images/clients/siemens.png',
      category: body.category || 'Corporate Client',
      displayOrder: body.displayOrder ? Number(body.displayOrder) : clients.length + 1
    };

    clients.push(newClient);
    saveClientsData(clients);

    return NextResponse.json({ success: true, client: newClient }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add client' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    let clients = getClientsData();

    clients = clients.map((c: any) => {
      if (c.id === body.id) {
        return {
          ...c,
          name: body.name ?? c.name,
          logo: body.logo ?? c.logo,
          category: body.category ?? c.category,
          displayOrder: body.displayOrder ? Number(body.displayOrder) : c.displayOrder
        };
      }
      return c;
    });

    saveClientsData(clients);
    return NextResponse.json({ success: true, clients });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update client' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Client ID required' }, { status: 400 });
    }

    let clients = getClientsData();
    clients = clients.filter((c: any) => c.id !== id);

    saveClientsData(clients);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete client' }, { status: 500 });
  }
}
