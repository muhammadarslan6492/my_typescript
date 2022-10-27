interface Veicle {
  name: string;
  year: Date;
  broken: boolean;
  sumary(): string;
}

interface Reports {
  sumary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  sumary(): string {
    return `Name: ${this.name}, year: ${this.year}, isBroken: ${this.broken}`;
  },
};

const drink = {
  name: 'Pepsi',
  color: 'black',
  sumary(): string {
    return `Drink: ${this.name}, color: ${this.color}`;
  },
};

const printVeicle = (vehicle: Veicle): void => {
  console.log(vehicle.sumary());
};

const report = (item: Reports): void => {
  console.log(item.sumary());
};
