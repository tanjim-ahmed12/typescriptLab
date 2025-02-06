import {Friend, Colleague } from './myTypes'
import { friends, colleagues } from "./01-basics";


function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

function allOlder(fArray: Friend[]): string[]{
    return fArray.map(
        f => {
            f.age += 1;
            return `${f.name} is now ${f.age}`;
        }
    )
}

console.log(allOlder(friends))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));
  
function addColleague(cs: Colleague[], newColleague: Colleague): Colleague[] {
    const maxExtension = Math.max(...cs.map(c => c.contact.extension), 0);
    newColleague.contact.extension = maxExtension + 1;
    cs.push(newColleague);
    return cs;
}

const colleague4 = {
    name: "Sheild O Connell",
    department: "HR",
    contact: {
      email: "soc@here.com",
      extension: 0
    }
  };

addColleague(colleagues.current, colleague4);
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));


