const model = {
    app: {
    },
    viewState: {
        temperaturePage: {
            temperature: 17,
            date: '2026-10-10',
        },
        graphPage: {
            startDate: '2026-09-23',
            endDate: '2026-09-30',
        },
    },
    temperatureRegistrations: [
        { temperature: 10, date: '2026-09-30' },
        { temperature: 11, date: '2026-09-29' },
        { temperature: 12, date: '2026-09-28' },
    ],
};

function createGraphHtml() {
    const reg = model.viewState.graphPage;
    const filteredTemperatureRegistrations = [];
    for (let tr of model.temperatureRegistrations) {
        if (tr.date >= reg.startDate && tr.date <= reg.endDate) {
            filteredTemperatureRegistrations.push(tr);
        }
    }

    // lager html basert på arrayen filteredTemperatureRegistrations

}

function register() {
    const r = model.viewState.temperaturePage;
    const newRegistration = { temperature: r.temperature, date: r.date };
    r.temperature = '';
    r.date = '';
    model.temperatureRegistrations.push(newRegistration);
    updateView();
}

const inputHtml = /*HTML*/`
    <input 
        type="text" 
        value="${model.viewState.temperaturePage.temperature ?? ''}"
        oninput="model.viewState.temperaturePage.temperature=this.valueAsNumber"
        />      
    <input 
        type="date" 
        value="${model.viewState.temperaturePage.date ?? ''}"
        oninput="model.viewState.temperaturePage.date=this.value"
        />      
    `;


/*
1. Hvilke data trenger vi i modellen for å tegne opp dette 
   skjermbildet?
2. Bruker inputs, tekstfelt, sortering => viewState/inputs
3. Hva kan ev. brukeren gjøre på denne siden - og hva trenger 
   vi i modellen for det? Eksempel: kjøpe et produkt på 
   komplett.no
*/