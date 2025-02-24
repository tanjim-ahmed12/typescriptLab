import {Friend, Colleague, EmailContact} from './myTypes'
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

function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number,
  max? : number
): EmailContact[] {
  let end = colleagues.length;
  if (max !== undefined) {
     end = max < 2 ? 1 : max
  }
  const sorted = colleagues.sort(sorter);
  const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return fullResult.slice(0,end)
}
// Test invocations
console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW

// // Test invocations
// console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
// console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));

  
  // console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
  // console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));
  
