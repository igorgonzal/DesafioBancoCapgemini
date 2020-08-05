<template>
  <div class="container-fluid">
    <h1 class="mt-4">Banco Capgemini</h1>
    <ol class="breadcrumb mb-4">
      <li class="breadcrumb-item active">Saldo</li>
    </ol>
    <div class="row">
      <div class="col-xl-12 col-md-12">R$ {{this.balanceData.balance}}</div>
    </div>
    <ol class="breadcrumb mb-4">
      <li class="breadcrumb-item active">Depositar</li>
    </ol>
    <div class="row">
      <div class="col-xl-12 col-md-12">
        <form v-on:submit.prevent="createAccount">
          <div class="form-group">
            <label for="valorDeposit">Valor</label>
            <input
              type="number"
              class="form-control"
              id="valorDeposit"
              name="valorDeposit"
              v-model="depositData.valorDeposit"
              placeholder="Valor"
            />
            <hr />
            <button type="button" class="btn btn-primary" v-on:click="createDeposit">Depositar</button>
          </div>
        </form>
      </div>
    </div>
    <ol class="breadcrumb mb-4">
      <li class="breadcrumb-item active">Sacar</li>
    </ol>
    <div class="row">
      <div class="col-xl-12 col-md-12">
        <form v-on:submit.prevent="createAccount">
          <div class="form-group">
            <label for="valor">Valor</label>
            <input
              type="number"
              class="form-control"
              id="valor"
              name="valor"
              v-model="transferData.valor"
              placeholder="Valor"
            />
            <hr />
            <button type="button" class="btn btn-primary" v-on:click="createTransfer">Saque</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import * as accountService from "../services/account_service";
export default {
  name: "account",
  data() {
    return {
      depositData: {
        valorDeposit: "",
        type: "D",
      },
      transferData: {
        valor: "",
        type: "T",
      },
      balanceData: {
        balance: 0,
      },
    };
  },
  mounted() {
    this.getBalance();
  },
  methods: {
    createDeposit() {
      let formData = new FormData();

      formData.append("valor", this.depositData.valorDeposit);
      formData.append("type", this.depositData.type);

      try {
        const response = accountService.createAccount(formData);
        window.location.reload();
      } catch (error) {
        alert("error!");
      }
    },
    createTransfer() {
      let formData = new FormData();

      formData.append("valor", this.transferData.valor);
      formData.append("type", this.transferData.type);

      try {
        const response = accountService.createAccount(formData);
        window.location.reload();
      } catch (error) {
        alert("error!");
      }
    },
    getBalance: async function () {
      try {
        const response = await accountService.getBalance();
        this.balanceData.balance = response.data[0].saldo;
        console.log(this.balanceData.balance);
      } catch (error) {}
    },
  },
};
</script>