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
          return  res.status(404).send({message: "Book not Found!"})
        }
        res.status(200).send(book);
    } catch (error) {
        res.status(500).send({message:'Failed to fetch book'})
    }
}

const updateBook =async (req,res)=>{
    try {
        const {id} = req.params;
        const updatedBook=await  Book.findByIdAndUpdate(id,req.body,{new: true});
        if(!updatedBook){
            return res.status(404).send({message: "Book not Found!"})
        }
        res.status(200).send(updatedBook);
    } catch (error) {
         res.status(500).send({message:'Failed to update book'})
    }
}

const deleteBook =async (req,res)=>{
    try {
        const {id} = req.params;
        const deletedBook=await  Book.findByIdAndDelete(id);
        if(!deletedBook){
            return res.status(404).send({message: "Book not Found!"})
        }
        res.status(200).send({message:'book deleted successfully',book:deletedBook});
    } catch (error) {
          res.status(500).send({message:'Failed to delete book'})
    }
}

module.exports = {postBooks,getBooks,getSingleBook,updateBook,deleteBook};