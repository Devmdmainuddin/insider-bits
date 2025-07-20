import { Rubik } from 'next/font/google';

export const SITE_TITLE_DEFAULT = 'ZORIK Blog Website';
export const SITE_TITLE_TEMPLATE_DEFAULT = `%s - Starter Pack`;
export const SITE_DESCRIPTION_DEFAULT = 'Starter Pack Description';
export const SITE_VERIFICATION_GOOGLE_DEFAULT =
    'google-site-verification=adwdawdaw';

export const FONT_DEFAULT = Rubik({
    subsets: ['latin'],
    variable: '--font-rubik-sans'
});
