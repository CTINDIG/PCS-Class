//Q1.
(function () {
    'use strict';

    function createAccount(){
         return {
            balance: 0,
            performTransactions: function(transaction){
                this.balance = transaction + this.balance;
            }
         };
    }
      const checking = createAccount();
      const savings = createAccount();

      const acct3 = {
        balance:0
      };
      const acct4 = {
        balance:0
      };
      const acct5 = {
        balance:0
      };

      checking.performTransactions(100);
      console.log(checking.balance);

      savings.performTransactions(1000);
      console.log(savings.balance);

//Q2.
        function performTransactions(transaction){
        this.balance = transaction + this.balance;
        }
        performTransactions.call(acct3, 15);
        console.log(acct3.balance);

        performTransactions.apply(acct4, [25]);
        console.log(acct4.balance);

        const acct5Transaction = performTransactions.bind(acct5);
        acct5Transaction(1567);
        console.log(acct5.balance);

}());


