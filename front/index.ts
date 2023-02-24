function greeting(firstName: string, lastName?: string) {
  if (lastName !== undefined)
    return `Ah vtnc, ${firstName} ${lastName}, com carinho é claro`;
  return `Tomar no cu, ${firstName}`;
}
console.log(greeting("Carlão", "Delas"));
console.log(greeting("Josias"));
