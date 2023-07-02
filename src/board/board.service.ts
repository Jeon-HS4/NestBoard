import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardService {
    private board: Board[] = [];

    getAllBoard(): Board[]{
        return this.board;
    }

    createBoard(CreateBoardDto: CreateBoardDto){
        const {title, description} = CreateBoardDto;
        const board: Board = {
            id: uuid(),
            title,
            description,
            status: BoardStatus.PUBLIC
        }

        this.board.push(board);
        return board;
    }

    getBoardById(id: String): Board{
        return this.board.find((board) => board.id === id);
    }

    deleteBoard(id: String): void{
        this.board = this.board.filter((board) => board.id !== id);
    }

    updateBoardStatus(id: String, status: BoardStatus): Board{
        const board =  this.getBoardById(id);
        board.status = status;
        return board;
    }
}
