import { Avatar, Box, TextField, Typography } from "@mui/material";
import { IComment } from "../../@types";
import { FormattedDate, IntlProvider } from "react-intl";
import { FormEvent, useState } from "react";

type TopicCommentProps ={
  comments: IComment[],
  postComment: (commentText: string) => Promise<void>
}
function TopicComment({
  comments,
  postComment
}:TopicCommentProps) {

  const [commentForm, setCommentForm] = useState<IComment>({
    content: ''
  })

  function handleSubmitComment(event: FormEvent) {
    event.preventDefault();

    //Dispara o método de quem fez a chamada
    postComment(commentForm.content);

    //Limpa o campo depois de enviar o comentário
    setCommentForm({...commentForm, content: ''})
  }

  return (

    <Box display="flex" flexDirection="column" gap={3}
      sx={{padding: '2rem'}}>

      <Typography variant="overline">
        Comentários
      </Typography>

      {comments.map((comment: IComment) =>(
        <Box key={comment.id} display="flex" flexDirection="row"
          gap={1} sx={{width: '100%', borderBottom: '1px solid #ddd', paddingBottom: '0.5rem'}}>

            <Box>
                <Avatar alt={comment.user?.fullname}
                  sx={{width: '1.5rem', height: '1.5rem'}}/>
            </Box>
            <Box display="flex" flexDirection="column" gap={1}>
              <Box display="flex" flexDirection="row" gap={1}
                alignItems="baseline" flex="1 1 auto">

                <Typography variant="body2">
                  {comment.user?.fullname}
                </Typography> 

                <Typography variant="caption">
                  <IntlProvider locale="pt-BR">
                    Criado em <FormattedDate value={comment.createdAt}
                                day="2-digit" month="2-digit" year="numeric" />
                  </IntlProvider>
                </Typography> 

              </Box>
              <Typography variant="caption">
                {comment.content}
              </Typography> 
            </Box>
        </Box>
      ))}

      <form onSubmit={handleSubmitComment}>
        <TextField 
          label="Comentário"
          required
          fullWidth
          autoFocus
          size="small"
          inputProps={{maxLength: 150}}
          value={commentForm.content}
          onChange={event => setCommentForm({... commentForm, content: event.target.value})}
        />          
      </form>

    </Box>
    
  )
}

export default TopicComment;