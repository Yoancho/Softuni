let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML =
    `<body>
     <div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
     </div>
    </body>`;

let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};

describe('sharedObject test', function () {
    describe('Initial value tests', function () {
        it('test name value', function () {
            expect(sharedObject.name).to.be.null;
        });
        it('test initial value', function () {
            expect(sharedObject.income).to.be.null;
        });
    });
    describe('changeName tests', function () {
        it('with empty string - null', function () {
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.null;
        });
        it('with string - Pesho', function () {
            sharedObject.changeName('Pesho');
            expect(sharedObject.name).to.be.equal('Pesho', 'Name did not changed');
        });
        describe('Name input tests', function () {
            it('with empty string - null', function () {
                sharedObject.changeName('Nakov');
                sharedObject.changeName('');
                let nameTxtVal = $('#name');
                expect(nameTxtVal.val()).to.be.equal('Nakov');
            });
            it('with string - Pesho', function () {
                sharedObject.changeName('Pesho');
                let nameTxtVal = $('#name');
                expect(nameTxtVal.val()).to.be.equal('Pesho', 'Name did not changed');
            });
        })
    });

    describe('changeIncome tests', function () {
        it('with a string - stay null', function () {
            sharedObject.changeIncome('d');
            expect(sharedObject.income).to.be.null;
        });
        it('with a positive number(should change correctly', function () {
            sharedObject.changeIncome(5);
            expect(sharedObject.income).to.be.equal(5, 'Income did not change correctly');
        });
        it('with a floating point', function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(4.11);
            expect(sharedObject.income).to.be.equal(5, 'Income did not change correctly');
        });
        it('with zero', function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.equal(5, 'Income did not change correctly');
        });
        it('with a negative number', function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(-4);
            expect(sharedObject.income).to.be.equal(5, 'Income did not change correctly');
        });
        describe('Income input tests', function () {
            it('with a string (should NOT change correct', function () {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome('d');
                let incomeTxt = $('#income');
                expect(incomeTxt.val()).to.be.equal('5', 'Income input did not change correctly');
            });
            it('with a positive number', function () {
                sharedObject.changeIncome(5);
                let incomeTxt = $('#income');
                expect(incomeTxt.val()).to.be.equal('5', 'Income input did not change correctly');
            });
            it('with a negative number', function () {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(-5);
                let incomeTxt = $('#income');
                expect(incomeTxt.val()).to.be.equal('5', 'Income input did not change correctly');
            });
            it('with zero', function () {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(0);
                let incomeTxt = $('#income');
                expect(incomeTxt.val()).to.be.equal('5', 'Income input did not change correctly');
            });
        });
    });
    describe('Update name tests', function () {
        it('with empty string - not change', function () {
            sharedObject.changeName('Viktor');
            let nameEl = $('#name');
            nameEl.val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Viktor', 'Name did not update correctly !');
        });
        it('with non-empty string - not change', function () {
            sharedObject.changeName('Viktor');
            let nameEl = $('#name');
            nameEl.val('Kiril');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Kiril', 'Name did not update correctly !');
        });

    });
    describe('Update Income',function () {
        it('with a string - NOT change', function () {
            sharedObject.changeIncome(3);
            let incomeEl = $('#income');
            incomeEl.val('income');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3, 'Income not update')
        });
        it('with a floating-point - NOT change', function () {
            sharedObject.changeIncome(3);
            let incomeEl = $('#income');
            incomeEl.val('3.11');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3, 'Income not update')
        });
        it('with a negative - NOT change', function () {
            sharedObject.changeIncome(3);
            let incomeEl = $('#income');
            incomeEl.val('-5');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3, 'Income not update')
        });
        it('with zero - NOT change', function () {
            sharedObject.changeIncome(3);
            let incomeEl = $('#income');
            incomeEl.val('0');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3, 'Income not update')
        });
        it('with a positive number - change properly', function () {
            sharedObject.changeIncome(3);
            let incomeEl = $('#income');
            incomeEl.val('5');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(5, 'Income not update')
        });
    });

});