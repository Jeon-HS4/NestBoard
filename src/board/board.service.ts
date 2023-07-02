import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import {v1 as uuid} from 'uuid';

@Injectable()
export class BoardService {
    private board: Board[] = [];

    getAllBoard(): Board[]{
        return this.board;
    }

    createBoard(title: String, description: String){
        const board: Board = {
            id: uuid(),
            title,
            description,
            status: BoardStatus.PUBLIC
        }

        this.board.push(board);
        return board;
    }
}
