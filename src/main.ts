const world = "world";
export function hello(who: string = world): string {
  return `Hello Mr.${who}! `;
}
console.log(
  hello(world)
);
