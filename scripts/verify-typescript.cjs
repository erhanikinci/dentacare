const fs=require('fs'),path=require('path');
let ts;try{ts=require('typescript')}catch{try{ts=require('/opt/nvm/versions/node/v22.16.0/lib/node_modules/typescript')}catch{console.error('Install dependencies first: npm install');process.exit(2)}}
const root=path.resolve(__dirname,'..');const files=[];function scan(dir){for(const f of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,f.name);if(f.isDirectory()){if(!['node_modules','.expo'].includes(f.name))scan(p)}else if(/\.tsx?$/.test(f.name))files.push(p)}}scan(path.join(root,'app'));scan(path.join(root,'src'));
let bad=0,imports=0;
for(const f of files){
 const source=fs.readFileSync(f,'utf8');
 const result=ts.transpileModule(source,{fileName:f,reportDiagnostics:true,compilerOptions:{jsx:ts.JsxEmit.ReactJSX,target:ts.ScriptTarget.ES2020,module:ts.ModuleKind.CommonJS}});
 for(const diag of result.diagnostics||[]){if(diag.category===ts.DiagnosticCategory.Error){console.error('SYNTAX',path.relative(root,f),ts.flattenDiagnosticMessageText(diag.messageText,'\n'));bad++}}
 const reg=/(?:import\s+(?:[^;]*?\s+from\s+)?|require\s*\()['"](@\/[^'"]+|\.{1,2}\/[^'"]+)['"]/g;
 for(const match of source.matchAll(reg)){const spec=match[1];const base=spec.startsWith('@/')?path.join(root,'src',spec.slice(2)):path.resolve(path.dirname(f),spec);if(!['.tsx','.ts','.jsx','.js','/index.ts','/index.tsx',''].some(ext=>fs.existsSync(base+ext))){console.error('MISSING IMPORT',path.relative(root,f),'->',spec);bad++}imports++}
}
if(bad){console.error('FAILED',bad,'problem(s)');process.exit(1)}
console.log('PASS ·',files.length,'TS/TSX files parsed +',imports,'local imports checked');
