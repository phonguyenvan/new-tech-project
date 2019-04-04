import test from 'ava';
import { I18n } from '../refs';

test('can translate email to right language', async (t) => {
    const i18n = new I18n('en');
    const translatedSubject = i18n.t('EMAIL.REGISTRATION.SUBJECT', { firstName: 'Pho' });
    t.true(translatedSubject.includes('Pho'));
    const translatedBody = i18n.t('EMAIL.REGISTRATION.BODY');
    t.true(translatedBody.length > 100);
});
