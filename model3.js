const model = {
    app: {
        currentPage: 'wizard',
    },
    viewState: {
        wizard: {
            currentStep: 2,
            gender: '',
            age: '',
            color: '',
        }
    },
    answers: [
        { gender: 'M', age: '30', color: 'blue' },
    ],
};

function next() {
    const vs = model.viewState.wizard;
    if (vs.currentStep >= 4) return;
    vs.currentStep++;
    updateView();
}

function register() {
    const vs = model.viewState.wizard;
    const newAnswer = {
        gender: vs.gender,
        age: vs.age,
        color: vs.color,
    };
    model.answers.push(newAnswer);
    model.app.currentPage = 'answeredReceiptPage';
    updateView();
}


/*
1. Hvilke data trenger vi i modellen for å tegne opp dette 
   skjermbildet?
2. Bruker inputs, tekstfelt, sortering => viewState/inputs
3. Hva kan ev. brukeren gjøre på denne siden - og hva trenger 
   vi i modellen for det? Eksempel: kjøpe et produkt på 
   komplett.no
*/