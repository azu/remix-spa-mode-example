import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [
        { title: "New Remix SPA" },
        { name: "description", content: "Welcome to Remix (SPA Mode)!" },
    ];
};

export default function Index() {
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
            <h1>Welcome to Remix (SPA Mode)</h1>
            <ul>
                <li>
                    <Link
                        to="/contact/1"
                    >
                        Contact 1
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact/2"
                    >
                        Contact 2
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact/3"
                    >
                        Contact 3
                    </Link>
                </li>
                <li>
                    <a
                        target="_blank"
                        href="https://remix.run/future/spa-mode"
                        rel="noreferrer"
                    >
                        SPA Mode Guide
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
                        Remix Docs
                    </a>
                </li>
            </ul>
        </div>
    );
}
