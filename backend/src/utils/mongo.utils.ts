import mongoose from "mongoose";

const verifyID = (id: string): boolean => {
	if (!id) {
		return false;
	}

	return mongoose.Types.ObjectId.isValid(id);
};

export { verifyID };
