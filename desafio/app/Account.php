<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Account extends Model
{
    public function getBalance()
    {
        $account = DB::select("SELECT SUM(debit) - SUM(credit) as saldo FROM (
            select SUM(valor) as debit, 0 as credit from accounts where type = 'D'
            UNION ALL
            SELECT 0 as debit, SUM(valor) AS credit from accounts where type = 'T'
            ) A");
        return $account;
    }
}
