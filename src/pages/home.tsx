'use client';
import LineShadow from '@/components/ui/lineShadow';
import ShinyText from '@/components/ui/shinyText';
import React from 'react';
import {
    PopoverForm,
    PopoverFormButton,
    PopoverFormCutOutLeftIcon,
    PopoverFormCutOutRightIcon,
    PopoverFormSeparator,
    PopoverFormSuccess,
} from '@/components/ui/popoverForm';
import { useEffect, useState } from 'react';
export default function Home() {
    return (
        <div className="flex h-full w-full flex-col items-center justify-start space-y-10 px-6 py-14 sm:py-30 md:px-28 md:py-20">
            <div className="h-fit w-fit rounded-4xl border border-gray-200 bg-[var(--secondary)]/40 px-3 py-1 text-center backdrop-blur-3xl">
                <ShinyText className="text-md">
                    Veridian Devs. - Your Dev Partner
                </ShinyText>
            </div>
            <h1 className="w-full text-center text-5xl font-extrabold tracking-wide capitalize md:text-7xl">
                We don't just launch
                <LineShadow className="italic" shadowColor={'white'}>
                    sites
                </LineShadow>
                , <br /> We launch{' '}
                <LineShadow className="italic" shadowColor="white">
                    legacies.
                </LineShadow>
            </h1>
            <p className="w-5/6 rounded-2xl border border-neutral-300/60 bg-[var(--secondary)]/30 p-3 text-center text-lg text-neutral-300 backdrop-blur-md lg:w-1/3">
                A website is an expense. A market-leading digital platform is an
                investment. We only build the latter.
            </p>
            <RequestCallbackButton />
        </div>
    );
}

export function RequestCallbackButton() {
    const [formState, setFormState] = useState<string>('idle');
    const [open, setOpen] = useState(false);
    const [name, setName] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [url, setUrl] = useState<string>('');
    function submit() {
        setFormState('loading');
        const text = `Hello Veridian Devs! I would like to request a callback. My name is ${name} and I would like to discuss about ${message}`;
        setTimeout(() => {
            setFormState('success');
            setUrl(
                `https://wa.me/6386665124/?text=${encodeURIComponent(text)}`
            );
        }, 1500);

        setTimeout(() => {
            setOpen(false);
            setFormState('idle');
            setName('');
            setMessage('');
            setUrl('');
        }, 4300);
    }

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setOpen(false);
            }

            if (
                (event.ctrlKey || event.metaKey) &&
                event.key === 'Enter' &&
                open &&
                formState === 'idle'
            ) {
                submit();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [open, formState]);

    return (
        <div className="flex w-fit items-center justify-center">
            <PopoverForm
                title="Request a a Callback"
                open={open}
                setOpen={setOpen}
                width="325px"
                height="225px"
                showCloseButton={formState !== 'success'}
                showSuccess={formState === 'success'}
                openChild={
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            if (!name || !message) return;
                            submit();
                        }}
                    >
                        <div className="relative flex flex-col space-y-0">
                            <input
                                type="text"
                                autoFocus
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="text-md w-full resize-none rounded-t-lg border border-[var(--secondary)]/50 px-3 py-2 text-[var(--secondary)] outline-none placeholder:text-[var(--secondary)]/50"
                                required
                            />
                            <textarea
                                placeholder={`What would you like to discuss about?\n• Graphic Designing\n• Application Development\n• Web Development`}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="min-h-28 w-full resize-none rounded-b-lg border-x border-b border-[var(--secondary)]/50 px-3 py-2 text-sm text-[var(--secondary)]/95 outline-none placeholder:text-[var(--secondary)]/50"
                                required
                            />
                        </div>
                        <div className="relative flex h-12 items-center px-[10px]">
                            <PopoverFormSeparator />
                            <div className="absolute top-0 left-0 -translate-x-[1.5px] -translate-y-1/2">
                                <PopoverFormCutOutLeftIcon />
                            </div>
                            <div className="absolute top-0 right-0 translate-x-[1.5px] -translate-y-1/2 rotate-180">
                                <PopoverFormCutOutRightIcon />
                            </div>
                            <PopoverFormButton
                                loading={formState === 'loading'}
                                text="Submit"
                            />
                        </div>
                    </form>
                }
                successChild={
                    <PopoverFormSuccess
                        title="Request Received"
                        description="Thank you for connecting with us!"
                        url={url}
                    />
                }
            />
        </div>
    );
}
