'use server';

import { cookies } from 'next/headers';

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const COOKIE_NAME = 'ROZSNORBERT_CHAT';

export async function getUserChat() {
    return (await cookies()).get(COOKIE_NAME)?.value || '0';
}

export async function setUserChat(chat: string, date: Date) {
    (await cookies()).set(COOKIE_NAME, `<c>${chat}</c><d>${date.toISOString()}</d>`);
}