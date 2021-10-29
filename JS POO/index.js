import {Cliente} from "./Cliente.js";
import { Gerente } from "./Funcionários/Gerente.js";
import { Diretor} from "./Funcionários/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 212343927);
const gerente = new Gerente("Ricardo", 5000, 1234567893);
gerente.cadastrarSenha("123")
diretor.cadastrarSenha("123456")

const cliente = new Cliente("Lais", 243897756, "456")
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");


const clienteDstaLogado = SistemaAutenticacao.login(cliente, "456");
console.log(gerenteEstaLogado, diretorEstaLogado);
console.log(clienteDstaLogado);

