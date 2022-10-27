// public private and protected

class Vehicle {
  private start(): void {
    console.log('drive start');
  }

  public drive(): void {
    this.start();
  }

  protected modify(): void {
    console.log('vehicle modify successfully');
  }
}

class Car extends Vehicle {
  startDrivingProcess(): void {
    this.drive();
  }
}

const carObj = new Car();

carObj.startDrivingProcess();
