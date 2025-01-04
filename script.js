const addnote=document.getElementById("addnote");
const writingarea=document.getElementById("writingarea");
const close=document.getElementById("close");
const create= document.getElementById("create");
const contain= document.getElementById("contain");
const textinput=document.getElementById("textinput");


addnote.addEventListener("click", ()=>{
    writingarea.style.display='block';
});

close.addEventListener("click", ()=>{
    writingarea.style.display='none';
    textinput.value=''


});

create.addEventListener("click", function(){
    const notes=document.createElement('div');
    notes.className="notes";
    contain.appendChild(notes);
    writingarea.style.display='none';

    let texts=textinput.value;
    notes.textContent=texts;
    textinput.value=''


    const buttons=document.createElement("div");
    const edit=document.createElement("button");
    buttons.className='butclass';
    edit.textContent='Edit';
    edit.className='buttt';


    
    const deleter=document.createElement("button");
    deleter.textContent='delete';
    deleter.className='buttt';

    buttons.appendChild(edit);
    buttons.appendChild(deleter);

    notes.appendChild(buttons);

    deleter.addEventListener('click', ()=>{
        event.stopPropagation();
        notes.remove();
    });


    create.textContent='Create note';
    edit.addEventListener('click', ()=>{
        event.stopPropagation();
        writingarea.style.display='block';
        textinput.value=texts;
        create.textContent='Save'
        notes.remove();
    });

    


    notes.addEventListener('click', ()=>{
        console.log('hellow world')
        const reading=document.createElement('div');
        reading.className='reading'
        document.body.appendChild(reading);
        reading.textContent=texts;

        const back=document.createElement("button");
        back.className='back';
        back.textContent='close';
        reading.appendChild(back)


        back.addEventListener('click', () =>{
            reading.style.display='none';
        })
    });
});




















