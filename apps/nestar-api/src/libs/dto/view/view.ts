import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import { ViewGroup } from '../../enums/view.enum';

@ObjectType()
export class View {
	@Field(() => String)
	_id: ObjectId;

	@Field(() => ViewGroup)
	viewRefId: ViewGroup;

	@Field(() => String)
	viewGroup: ObjectId;

	@Field(() => String)
	memberId: ObjectId;

	@Field(() => Date)
	createdAt?: Date;

	@Field(() => Date)
	updatedAt?: Date;
}
