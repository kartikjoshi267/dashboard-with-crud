import {NextRequest, NextResponse} from "next/server";
import {db} from "@/lib/connectToDB";

const Project = db.Project;

export async function GET(req) {
    try {
        return NextResponse.json(await Project.find({}));
    } catch (error) {
        return new Response(null, {
            status: 500,
            statusText: 'Internal Server Error'
        });
    }
}

export async function POST(req) {
    try {
        const {name, description, author} = await req.json();
        if (!name || !description || !author) {
            return new Response(null, {
                status: 403,
                statusText: 'Invalid Fields'
            });
        }

        const project = await new Project({
            name, description, author
        });
        await project.save();

        return NextResponse.json(project);
    } catch (error) {
        return new Response(null, {
            status: 500,
            statusText: 'Internal Server Error'
        });
    }
}

export async function PATCH(req) {
    try {
        const {_id, name, description, author} = await req.json();
        console.log(_id, name, description, author);

        const project = await Project.findByIdAndUpdate(_id, {
            $set: {
                name,
                description,
                author
            }
        }, {new: true});

        return NextResponse.json(project);
    } catch (error) {
        return new Response(null, {
            status: 500,
            statusText: 'Internal Server Error'
        });
    }
}


export async function DELETE(req) {
    try {
        const _id = new URL(req.url).searchParams.get('_id');

        await Project.findByIdAndDelete(_id);

        return NextResponse.json(await Project.find({}));
    } catch (error) {
        return new Response(null, {
            status: 500,
            statusText: 'Internal Server Error'
        });
    }
}