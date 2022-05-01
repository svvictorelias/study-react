import './MyForm.css'
import {useState} from 'react'
const MyForm = ({user}) => {

    const [name, setName] = useState(user? user.name:'')
    const [email, setEmail] = useState(user? user.email:'')
    const [bio, setBio] = useState('')

    const [role, setRole] = useState('')

    {/*manipulação de state*/}
    const handleName = (e) =>{
        setName(e.target.value)
    }

    const handleSubmit = e =>{
        e.preventDefault()
        console.log(name)
        console.log(email)
        //limpar forms
        setName('')
        setEmail('')
        setBio('')
        console.log(name,email,bio,role)
    }
    
    
    return (
        <div>
        {/*Envio de forms tirando Default de recarregar*/}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName} value={name}/>
            </div>
            <label>
                {/*Simplificação de manipulação de state*/}
                <span>E-mail</span>
                <input type="email" name="email" placeholder="Digite Seu email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            </label>
            {/* bio */}
            <label>
                <span>Bio:</span>
                <textarea name="Bio" onChange={e=>setBio(e.target.value)} value={bio}></textarea>
            </label>
            {/*Select*/}
            <label>
                <span>Função do Sistema</span>
                <select name="role" onChange={e=>setRole(e.target.value) } value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="adm">Administrador</option>
                </select>
            </label>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default MyForm
