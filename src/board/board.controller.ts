import { Controller, Get, Post, Body, Param, Delete, Patch, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { Board } from './board.entity';

@Controller('board')
export class BoardController {
    constructor(private boardService: BoardService){}


    @Post()
    @UsePipes(ValidationPipe)
    createBoard(@Body() CreateBoardDto: CreateBoardDto): Promise<Board>{
        return this.boardService.createBoard(CreateBoardDto);
    }


    @Get()
    getAllBoards(): Promise<Board[]>{
        return this.boardService.getAllBoard();
    }

    @Get('/:id')
    getBoardById(@Param('id') id: number): Promise<Board>{
        return this.boardService.getBoardById(id);
    }

    @Delete('/:id')
    deleteBoard(@Param('id', ParseIntPipe) id): Promise<void>{
        return this.boardService.deleteBoard(id);
    }

    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id', ParseIntPipe) id: number,
        @Body('status', BoardStatusValidationPipe) status: BoardStatus
    ){
        return this.boardService.updateBoardStatus(id, status);
    }


}
