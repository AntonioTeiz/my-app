export type Pessoa =  {
	id: number,
	nome_pessoa: string,
	email_principal: string,
	fone_res: number,
}

export type PessoaCadastrar = Omit<Pessoa, 'id'>;