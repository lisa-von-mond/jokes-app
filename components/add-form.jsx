
import styled, {css} from "styled-components";

export function AddForm({
    onSubmitJoke,
    disabled,
    submitText,
    error,
    defaultValue,
    id,
  }
){

async function handleSubmit(event) {
    event.preventDefault();
        // get data from event object
    const jokeText = event.target.elements.name.value;
        // fetch
        const response = await fetch("/api/jokes", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ text: jokeText }),
        });
        const createdJoke = await response.json();
        if (response.ok) {
          alert(`Created new joke with id ${createdJoke.data._id}`);
        } else {
          alert(`Ooops — ${createdJoke.error}`);
        }}


return(
<>
<SubHeadline>Add Joke</SubHeadline>
<MyForm onSubmit={handleSubmit}>
<Formdiv>
<label for="name-${id}}">Name of Joke</label>
<input name="name" id="name-${id}}" placeholder="jour joke here"></input>
<input name="submit" type="submit"></input>
</Formdiv>
</MyForm>
</>

)

}

const MyForm = styled.form`
display:flex;
flex-direction:column;
font-size:1.3rem;
gap:1rem;

input{
    height:3rem;
    padding:0.8rem;
    border-radius:1rem;
}

`

const Formdiv = styled.div`
display:flex;
align-items:center;
gap:2rem;
`

const SubHeadline = styled.h2`
font-size:2rem;
text-transform:uppercase
`


/* <Formdiv>
<input type="checkbox" id="lame" name="lame" value="lame"></input>
<label for="lame">This Joke is lame</label>
</Formdiv>
<Formdiv>
<input type="checkbox" id="nice" name="nice" value="nice"></input>
<label for="nice">This joke is nice</label>
</Formdiv>
<Formdiv>
<input type="checkbox" id="great" name="great" value="great"></input>
<label for="great">This joke is great</label>
</Formdiv> */
