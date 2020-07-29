import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from "../../../components/FormField";

function CadastroCategoria() {
  
  const valorIniciais = {
    name: '',
    descricao: '',
    cor : '',
  }

  const [categorias , setCategorias] = useState([]);
  const [values, setValues] = useState(valorIniciais);

  function setValue(chave,valor) {
    setValues({
     ...values,
     [chave]: valor, 
    })
  }
  function handleChange(infosDoEvento){
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }
  return (
    <PageDefault>
      <h1>Cadastro de Categoria : {values.name}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento){
          infosDoEvento.preventDefault()
          console.log("teste do form")
          setCategorias([
            ...categorias,
            values
          ])
          setValues({}) 
      }}>
        <FormField
        label='Nome da Categoria'
        type='text'
        name='name'
        value={values.name}
        onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          type="spellcheck"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />  

           <FormField 
           label="Cor"
           type='color'
           name='cor'
           value={values.cor}
           onChange={handleChange}
           />

        <button>
          Cadastrar
        </button>
      </form>
            <ul>
              {categorias.map((categorias, indice) =>{
                return (
                  <li key={`${categorias}${indice}`}>
                   {categorias.name} 
                  </li>
                )
              })}
            </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;