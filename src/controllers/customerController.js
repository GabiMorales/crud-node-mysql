const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer', (err,customers)  => {
            if(err){
                res.json(err);
            }
            res.render('customers', {
                data: customers
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO customer SET ?', [data], (err, customer) => {
            console.log(customer);
            res.redirect('/');
        });
    });
};

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer WHERE ID = ?', [id], (err, customer) => {
            res.render('customer_edit', {
                data: customer[0]
            });
        });
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const newCostumer = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE customer set ? WHERE id = ?', [newCostumer, id], (err, rows) => {
            res.redirect('/');
        });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
        connection.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
        res.redirect('/');
        });
    });
}

module.exports = controller;