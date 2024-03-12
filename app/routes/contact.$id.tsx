import { ClientLoaderFunctionArgs, Form, useLoaderData } from "@remix-run/react";

export const clientLoader = async ({
                                       params,
                                   }: ClientLoaderFunctionArgs) => {
    const id = params.id;
    return {
        id,
        date: new Date().toISOString(),
    };
};
export default function Contact() {
    const data = useLoaderData<typeof clientLoader>();
    return (
        <div>
            <h1>Contact</h1>
            <div>
                <p>ID: {data.id}</p>
                <p>Date: {data.date}</p>
            </div>
            <Form method="post">
                <label>
                    Name
                    <input type="text" name="name"/>
                </label>
                <label>
                    Email
                    <input type="email" name="email"/>
                </label>
                <label>
                    Message
                    <textarea name="message"/>
                </label>
                <button type="submit">Send</button>
            </Form>
            <p>
                Back to <a href="/">Home</a>
            </p>
        </div>
    );
}
