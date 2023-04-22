import React, {useState} from 'react';
import html2canvas from 'html2canvas'

const Imgmemes = () =>{

    const [textomeme, setTextomeme] = useState();
    const [imgMeme, setImgmeme] = useState()

    const textmeme = (e) =>{
        setTextomeme(e.target.value);
        console.log(e.target.value);
    }

    const seleccionarImg = (e)=>{
        setImgmeme(e.target.value);
        console.log(e.target.value);
      }

    const descarga = (e) =>{
        html2canvas(document.querySelector("#exportar")).then(function(canvas){
            let img = canvas.toDataURL("memesImg/png");
            let link = document.createElement("a");
            link.download = "memepropio.png";
            link.href = img;
            link.click();
        });
    }

    return(
        <div>
        <h1 className='mt-5 mb-3 text-light '>Editá tu propio meme</h1>

        <h2 className='mt-2 mb-3'>Escribí tu frase</h2>
        <input onChange={textmeme} className="form-control w-25 m-auto d-block" type="text" placeholder="Pone tu frase" name="meme"/>
        <h2 className="mt-2 mb-3">Elegí la imagen de tu meme</h2>
        <select onChange={seleccionarImg} className="form-select form-select-lg mb-3 w-50 m-auto" aria-label="Default select example">
          <option selected>Elegi tu meme</option>
          <option value={6}>Futurama</option>
          <option value={7}>Bob Esponja</option>
          <option value={8}>Señora</option>
          <option value={9}>Calamardo</option>
        </select>

        <figure className="text-center" id='exportar'>
          <p className="mt-5 m-2 h1 text-center">{textomeme}</p>
          <img src={`./memesImg/${imgMeme}.png`} className='figure-img mt-3 d-block m-auto' alt='meme'/>
        </figure>
        <button onClick={descarga} type='button' className='btn btn-primary mt-5 mb-4'>Bajar Meme</button>
    </div>
    )
}
export default Imgmemes;