//INLINE PROPS

// export function Hello(props: { name: string }) {
//     return (
//       <div>
//         Hello {props.name} who is {props.age}
//       </div>
//     );
//   }
  
//SEPERATE PROP TYPE

//   type HelloProps = {
//     name: string;
//     age: number;
//   };
  
//   export function Hello(props: HelloProps) {
//     return (
//       <div>
//         Hello {props.name} who is {props.age}
//       </div>
//     );
//   }

//DECONSTRUCTED PROPS

type HelloProps = {
    name: string;
    age: number;
  };
  
  export function Hello({ name, age }: HelloProps) {
    return (
      <div>
        Hello {name} who is {age}
      </div>
    );
  }