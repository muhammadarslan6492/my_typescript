const profile = {
  user: 'arslan',
  age: 26,
  coods: {
    lat: 0,
    lng: 20,
  },
  setAge(age: number) {
    this.age = age;
  },
};

const { age, user }: { age: number; user: string } = profile;
const {
  coods: { lat, lng },
}: { coods: { lat: number; lng: number } } = profile;
