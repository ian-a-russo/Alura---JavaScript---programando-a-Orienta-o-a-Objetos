import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ian", 12345678901);

const contaCorrente1 = new ContaCorrente(1211, cliente1);

const cliente2 = new Cliente("Carlos", 22345678902);

const contaCorrente2 = new ContaCorrente(2222, cliente2);

contaCorrente1.sacar(20);

contaCorrente2.depositar(200);

contaCorrente2.transferir(50, contaCorrente1);

console.log(cliente1);
console.log(contaCorrente1);

console.log(cliente2);
console.log(contaCorrente2);
