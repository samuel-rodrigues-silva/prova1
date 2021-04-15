const my_database = new Map();

const listAll = (req,res) => {
    const values = Array.from(my_database.values());
    res.status(200).send(values);
};
const fetchCpf = (req,res) => {
    const body = req.body;
    Array.from(my_database.values()).forEach(element => {
        if(element['cpf'] == req.body){
            res.status(200).send(element);
        }
    });
}

const fetchDependents = (req,res) => {
    const body = req.body;
    Array.from(my_database.values()).forEach(element => {
        if(element['cpfTitular'] == req.body){
            res.status(200).send(element);
        }
    });
}

const create = (req,res) => {
    const body = req.body;
    my_database.set(body.id,body);
    res.status(201).send(body)
}

const update = (req,res) => {
    const cpf = req.params.cpf;
    if(my_database.has(cpf)){
        const body = req.body;
        body.cpf = cpf
        my_database.set(cpf,body);
        res.status(200).send(body);
    }else{
        res.status(400).send({
            "message " :"Cpf not found"
        })
    }
    
}

const remove = (req,res) => {
    const cpf = req.params.cpf;

    if(my_database.has(cpf)){
        const body = my_database.get(cpf);
        body.cpf = cpf
        my_database.remove(cpf);
        res.status(200).send(body);
    }

}

module.exports = {listAll,
    fetchCpf,
    fetchDependents,
    create,
    update,
    remove,}