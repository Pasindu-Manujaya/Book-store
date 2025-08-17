const Book = require('./book.model');


const postBooks =async (req,res)=>{
    try{
         const newBook =await Book({...req.body});
         await newBook.save();
         res.status(200).send({message:'Book was saved succesfully',book:newBook});

    }
    catch(error){
        console.log("Error when creating book-",error);
        res.status(500).send({message:'Failed to create a book'});
    }
}

const getBooks =async (req,res)=>{
        try {
           const books=await Book.find().sort({createdAt:-1});
           res.status(200).send(books);

        } catch (error) {
            console.log('Error when fetching books from the DB',error);
            res.status(500).send({message:'Failed to fetch books'})
        }
}

const getSingleBook =async (req,res)=>{
    try {
        const {id}= req.params;
        const book=await Book.findById(id);
        if(!book){
            res.status(404).send({message: "Book not Found!"})
        }
        res.status(200).send(book);
    } catch (error) {
        res.status(500).send({message:'Failed to fetch book'})
    }
}

module.exports = {postBooks,getBooks,getSingleBook};