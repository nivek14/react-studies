const UserDetail = ({ nome, idade, profissao, habilitacao }) => {
    return (
        <div>
            <li>{nome}</li>
            <li>{idade}</li>
            <li>{profissao}</li>
            {habilitacao === true ? (<p>pode tirar</p>) : (<p>nao pode tirar</p>)}
        </div>

    )
}

export default UserDetail