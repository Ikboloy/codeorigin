/* Descriptive measurements only. No authorship classifier or probability. */
(function(root){
'use strict';
const MAX_BYTES=100000;
function analyze(source,language='python'){
 if(typeof source!=='string') throw new Error('invalid_input');
 if(!['python','javascript'].includes(language)) throw new Error('unsupported_language');
 if(new TextEncoder().encode(source).length>MAX_BYTES) throw new Error('too_large');
 if(source.includes('\0')) throw new Error('binary_file');
 const lines=source.replace(/\r\n?/g,'\n').split('\n');
 const nonempty=lines.map((text,index)=>({text,index:index+1})).filter(x=>x.text.trim());
 if(!nonempty.length) throw new Error('empty_input');
 const long=nonempty.filter(x=>x.text.length>100).map(x=>x.index);
 const comment=nonempty.filter(x=>language==='python'?/^\s*#/.test(x.text):/^\s*\/\//.test(x.text)).map(x=>x.index);
 const groups=new Map();
 for(const line of nonempty){const key=line.text.trim();if(key.length>=20){const group=groups.get(key)||[];group.push(line.index);groups.set(key,group);}}
 const repeated=[...groups.values()].filter(x=>x.length>1);
 const tabs=nonempty.filter(x=>/^\t+/.test(x.text)).map(x=>x.index);
 const spaces=nonempty.filter(x=>/^ +\S/.test(x.text)).map(x=>x.index);
 return {schemaVersion:1,language,verdict:'insufficient_evidence',probability:null,metrics:{nonemptyLines:nonempty.length,longLines:long.length,commentLikeLines:comment.length,repeatedGroups:repeated.length},evidence:{longLines:long,commentLikeLines:comment,repeatedGroups:repeated,mixedIndentation:tabs.length&&spaces.length?{tabs,spaces}:null},limitations:['descriptive_not_predictive','lexical_not_parser','no_validated_training_data']};
}
if(typeof module!=='undefined'&&module.exports) module.exports={analyze,MAX_BYTES};else root.CodeOrigin={analyze,MAX_BYTES};
})(globalThis);
