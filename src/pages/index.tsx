import Image from "next/image";
import Button from "../components/Button";
import Card from "../components/Card";

export default function Home() {
    return (
        <main className="p-5">
            <div className="mb-5">
                <h2 className="mb-5 border-b-2 text-2xl">Buttons</h2>

                <Button size="sm" className="mr-2">
                    TEST BUTTON
                </Button>
                <Button size="md" className="mr-2">
                    TEST BUTTON
                </Button>
                <Button size="lg" className="mr-2">
                    TEST BUTTON
                </Button>
            </div>

            <div>
                <h2 className="mb-5 border-b-2 text-2xl">Cards</h2>

                <Card className="mr-5">
                    <Card.Title>TITLE GOES HERE</Card.Title>
                    <Card.Body>
                        <p>Magna fugiat excepteur culpa ut qui.</p>
                        <p>Magna fugiat excepteur culpa ut qui.</p>
                        <p>Magna fugiat excepteur culpa ut qui.</p>
                        <p>Magna fugiat excepteur culpa ut qui.</p>
                        <p>Magna fugiat excepteur culpa ut qui.</p>
                    </Card.Body>
                </Card>

                <Card variant="line" className="mr-5">
                    <Card.Title>TITLE GOES HERE</Card.Title>
                    <Card.Body>
                        <p>Magna fugiat excepteur culpa ut qui.</p>
                        <p>Magna fugiat excepteur culpa ut qui.</p>
                        <p>Magna fugiat excepteur culpa ut qui.</p>
                        <p>Magna fugiat excepteur culpa ut qui.</p>
                        <p>Magna fugiat excepteur culpa ut qui.</p>
                    </Card.Body>
                </Card>

                <Card variant="double-line">
                    <Card.Title>TITLE GOES HERE</Card.Title>
                    <Card.Body>
                        <p>Magna fugiat excepteur culpa ut qui.</p>
                        <p>Magna fugiat excepteur culpa ut qui.</p>
                        <p>Magna fugiat excepteur culpa ut qui.</p>
                        <p>Magna fugiat excepteur culpa ut qui.</p>
                        <p>Magna fugiat excepteur culpa ut qui.</p>
                    </Card.Body>
                </Card>
            </div>
        </main>
    );
}
