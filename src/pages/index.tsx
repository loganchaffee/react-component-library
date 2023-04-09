import Button from '@/components/Button';
import Card from '@/components/Card';
import TextInput from '@/components/TextInput';
import TextArea from '@/components/TextArea';
import FileInput from '@/components/FileInput';
import { useState } from 'react';

export default function Home() {
    const [value, setValue] = useState('');

    return (
        <main className='bg-pic h-screen overflow-y-auto p-5'>
            <h2 className='mb-5 mt-20 border-b-2 text-2xl'>Buttons</h2>

            <br />

            <Button size='sm' className='mr-2'>
                TEST BUTTON
            </Button>
            <Button size='md' className='mr-2'>
                TEST BUTTON
            </Button>
            <Button size='lg' className='mr-2'>
                TEST BUTTON
            </Button>

            <h2 className='mb-5 mt-20 border-b-2 text-2xl'>Cards</h2>

            <br />
            <br />

            <Card className='mr-5'>
                <Card.Title>TITLE GOES HERE</Card.Title>
                <Card.Body>
                    <p>Magna fugiat excepteur culpa ut qui.</p>
                    <p>Magna fugiat excepteur culpa ut qui.</p>
                    <p>Magna fugiat excepteur culpa ut qui.</p>
                    <p>Magna fugiat excepteur culpa ut qui.</p>
                    <p>Magna fugiat excepteur culpa ut qui.</p>
                </Card.Body>
            </Card>

            <Card variant='line' className='mr-5'>
                <Card.Title>TITLE GOES HERE</Card.Title>
                <Card.Body>
                    <p>Magna fugiat excepteur culpa ut qui.</p>
                    <p>Magna fugiat excepteur culpa ut qui.</p>
                    <p>Magna fugiat excepteur culpa ut qui.</p>
                    <p>Magna fugiat excepteur culpa ut qui.</p>
                    <p>Magna fugiat excepteur culpa ut qui.</p>
                </Card.Body>
            </Card>

            <Card variant='file'>
                <Card.Title>TITLE GOES HERE</Card.Title>
                <Card.Body>
                    <p>Magna fugiat excepteur culpa ut qui.</p>
                    <p>Magna fugiat excepteur culpa ut qui.</p>
                    <p>Magna fugiat excepteur culpa ut qui.</p>
                    <p>Magna fugiat excepteur culpa ut qui.</p>
                    <p>Magna fugiat excepteur culpa ut qui.</p>
                </Card.Body>
            </Card>

            <h2 className='mb-5 mt-20 border-b-2 text-2xl'>Inputs</h2>

            <TextInput placeholder='Enter Text' className='mr-5' />

            <br />

            <TextArea className='mr-5' />

            <br />

            <FileInput multiple />

            <div className='mb-20' />
        </main>
    );
}
