let file_path;
let inp_e = document.createElement('input');
inp_e.setAttribute('type','file');
inp_e.id='add_img';
inp_e.setAttribute('accept','image/jpeg,image/png');
inp_e.multiple=true;

let images=[];
let length=0;

$('#upload').on('click',() => inp_e.click());

$(inp_e).change(function (e) { 

    if(e.target.files.length>0)
    {
        for(let obj of e.target.files)
        {
            images.push(obj);
            $("#img_frames").append('<div class="grid-item" id = "imgdiv_'+length+'"><img class="img_data_mini" src="#" id="img_'+length+'"></div>'); 
            let image = document.getElementById('img_'+length);
            image.src = URL.createObjectURL(obj);
            ++length;
        }
    }
});
