const buttons=[document.getElementById('runTop'),document.getElementById('runHero')];
const terminal=document.getElementById('terminalText');
const progress=document.getElementById('progress');
function runPipeline(){
  buttons.forEach(b=>{b.disabled=true;b.textContent='⏳ Running...'});
  progress.style.width='10%';
  const lines=[
    '$ ./run-pipeline',
    '> Checking source code...',
    '✓ GitHub repository connected',
    '> Installing dependencies...',
    '✓ npm install completed',
    '> Running Jest test suite...',
    '✓ 5 tests passed',
    '> Quality gate: PASSED',
    '> Jenkins build #43: SUCCESS'
  ];
  let i=0;
  terminal.textContent='';
  const timer=setInterval(()=>{
    terminal.textContent += lines[i]+'\n';
    progress.style.width=((i+1)/lines.length*100)+'%';
    i++;
    if(i===lines.length){
      clearInterval(timer);
      terminal.innerHTML += '<span class="cursor">▋</span>';
      buttons.forEach(b=>{b.disabled=false;b.textContent='▶ Run Pipeline'});
    }
  },350);
}
buttons.forEach(b=>b.addEventListener('click',runPipeline));