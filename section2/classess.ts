class Veicle {
  driver(): void {
    console.log('muhammad arslan');
  }

  honk(): void {
    console.log('baaa baaaa baaa');
  }
}

class car extends Veicle {}

const obj = new car();

obj.driver();
obj.honk();

// now we are implement over writting method
