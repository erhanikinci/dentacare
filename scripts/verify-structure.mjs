import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
const required=[
 'package.json','app.json','tsconfig.json','babel.config.js','app/_layout.tsx','app/index.tsx','app/splash.tsx',
 'app/(auth)/welcome.tsx','app/(auth)/sign-in.tsx','app/(auth)/onboarding.tsx','app/(tabs)/_layout.tsx',
 'app/(tabs)/home.tsx','app/(tabs)/appointments.tsx','app/(tabs)/records.tsx','app/(tabs)/messages.tsx','app/(tabs)/profile.tsx',
 'app/dentists/index.tsx','app/dentists/[id].tsx','app/treatments/index.tsx','app/treatments/[id].tsx',
 'app/booking.tsx','app/booking-confirmed.tsx','app/video-consult.tsx','app/messages/[id].tsx',
 'app/tracker.tsx','app/emergency.tsx','app/clinic.tsx','app/checkout.tsx','app/notifications.tsx','app/saved.tsx','app/design-system.tsx',
 'assets/icon.png','assets/splash.png','assets/splash-icon.png','src/components/premium-art.tsx','src/components/ui.tsx','src/components/illustrations.tsx','src/components/catalog.tsx',
 'src/context/AppContext.tsx','src/data/demo.ts','src/theme/index.ts'
];
let errors=0;
for(const file of required){if(!fs.existsSync(path.join(root,file))){console.error('MISSING',file);errors++}}
for(const file of ['package.json','app.json']){try{JSON.parse(fs.readFileSync(path.join(root,file),'utf-8'));}catch(e){console.error('INVALID JSON',file,e);errors++}}
if(errors)process.exit(1);
console.log(`PASS · ${required.length} required source/config/asset files present; JSON valid.`);
console.log('Note: this structural check does not replace npm install, TypeScript typecheck or a device run.');
