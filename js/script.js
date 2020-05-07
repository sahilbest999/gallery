let inp_e = document.createElement('input');;
inp_e.setAttribute('type','file');
inp_e.id='add_img';
inp_e.setAttribute('accept','image/jpeg,image/png');
inp_e.multiple=true;

let img_data;
let elementRef;
let gallery;

let div;
let img;
let span;

let images=[];
const meta_data = [];
let length=0;


$('#upload').on('click',() => inp_e.click());

$(inp_e).change(function (e) { 

    if(e.target.files.length>0)
    {
        for(let obj of e.target.files)
        {
            images.push(obj);

            div = document.createElement("div");
          //  div.className = "grid-item";
          div.classList.add(...["column"]);
            div.id = `imgdiv_${length}`;

            img = document.createElement("img");
            img.src= URL.createObjectURL(obj);
            img.className="img_data_mini";
            img.id=length;
            img.onload = () => URL.revokeObjectURL(obj);

            $("#img_frames").append(img);
            
            meta_data.push(getMeta_data(obj));
            ++length;
            // img_data = URL.createObjectURL(obj);
            // URL.revokeObjectURL(obj)
            // gallery.addItems({
            //     thumbnailSrc: img_data, // link to thumbnail image
            //     enlargedSrc: img_data, // link to enlarged image
            //     enlargedWidth: 300,
            //     enlargedHeight: 300,
            //     title: obj.name, // Title for the label or button
            //     link: img_data
            // });
        }
    }
});

function getMeta_data(obj){
    return {
        size : obj.size,
        name : obj.name,
        lastModified : obj.lastModified,
    }
}

$($(".img_data_mini").first()).dblclick(()=> alert(`Name : ${meta_data[$(this).id].name}\nSize : ${meta_data[$(this).id].size}\nLastModified : ${new Date(meta_data[$(this).id].lastModified)}`));

// window.addEventListener('load', function() {
//     elementRef = document.getElementById('gallery');

//     gallery = new NaturalGallery.Natural(elementRef); // or
   
//     gallery.init();
// }); 
