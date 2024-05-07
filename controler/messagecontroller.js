
import  {OpenAI} from "openai"

export default async  function messagecontroller(req, res){

var message = req.body;

console.log("sent in",message)


var msgg =await main(message);
res.send(msgg)

}

//sk-proj-Hmz6yDN1u2T0NtS5WjBmT3BlbkFJZmUoPNi8B3u8PqZ49Kxd

async function main(messagexx) {
    const openai = new OpenAI({ apiKey: 'sk-proj-Hmz6yDN1u2T0NtS5WjBmT3BlbkFJZmUoPNi8B3u8PqZ49Kxd' });

    var prompt =" You are a helpful assistant. I want you to use this text after the column as context to answer some questions only available within the text. anything or question asked outside the text provided should be responded with 'you are ou of context'  here is the text for context: In PostgreSQL, there is no hard-coded limit to the number of tables you can have within a single database. The number of tables you can create is influenced by various factors, including available system resources such as disk space, memory, and the PostgreSQL configuration settings.  However, it's essential to consider practical limitations and performance implications when dealing with a large number of tables in a database. Each table consumes resources, and the complexity of queries, indexing, and maintenance operations can increase with the number of tables. If you find yourself needing an extremely large number of tables, you might want to reconsider your database schema design or explore partitioning strategies, which can help manage and optimize large datasets. In general, PostgreSQL is known for its ability to handle a substantial number of tables and large databases, but the specific limits will depend on the resources available on your system and the version/configuration of PostgreSQL you are using. Do not give answers more than 2 lines kepp your answers short and concise"

    const completion = await openai.chat.completions.create({
      messages: messagexx, model: "gpt-3.5-turbo",
    });
  
    var msgres=completion.choices[0];
  
    return msgres
  }
