import { Button, Fieldset, Form, Price, Text } from '@/app/_components/Form';
import Menu from '@/app/_components/Menu';
import Count from '@/app/_components/Count';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-24">
            <div className="box-border pt-10">
                <Count />
                <Form>
                    <Fieldset>
                        <Menu />
                    </Fieldset>
                    <Fieldset className="pt-10">
                        <Button>Tax ($)</Button>
                        <Price name="a" />
                        <Button>Tip (%)</Button>
                        <Price name="a" />
                        <Button disabled>Total ($)</Button>
                        <Price
                            disabled
                            name="a"
                        />
                    </Fieldset>
                </Form>
            </div>
        </main>
    );
}
